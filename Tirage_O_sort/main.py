import pandas as pd
import numpy as np
import random

# Lire le fichier Excel existant
df = pd.read_excel('personnes.xlsx', engine='openpyxl')

# Transformer l'Excel en Tableau numpy
participants = df.to_numpy()

nb_Participants = participants.shape[0]
randomizer = list(range(nb_Participants))
random.shuffle(randomizer)
num_equipe = 1

equipes = np.array([['Tirage', 'O Sort']])

for i in range(nb_Participants):
    if i%2==0:
        equipes = np.append(equipes, [['Equipe', num_equipe]], axis=0)
        num_equipe+=1
    equipes = np.append(equipes, [[participants[randomizer[i], 0], participants[randomizer[i], 1]]], axis=0)

print(equipes)
