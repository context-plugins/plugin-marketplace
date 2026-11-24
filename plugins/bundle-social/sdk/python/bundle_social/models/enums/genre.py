from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Genre(str, Enum):
    ROCK = "ROCK"
    POP = "POP"
    LATIN = "LATIN"
    METAL = "METAL"
    ELECTRONIC = "ELECTRONIC"
    HIP_HOP_RAP = "HIP_HOP/RAP"
    ALTERNATIVE_INDIE = "ALTERNATIVE/INDIE"
    R_B_SOUL = "R&B/SOUL"
    COUNTRY = "COUNTRY"
    CLASSICAL = "CLASSICAL"
    JAZZ = "JAZZ"
    CHILDHOOD = "CHILDHOOD"
    ALTERNATIVE_HIP_HOP = "ALTERNATIVE_HIP_HOP"
    AMBIENT = "AMBIENT"
    BOSSA_NOVA = "BOSSA_NOVA"
    BRAZILIAN_FUNK_STYLE = "BRAZILIAN_FUNK_STYLE"
    CHILL_BEATS = "CHILL_BEATS"
    CHILLOUT = "CHILLOUT"
    CHINESE_POP = "CHINESE_POP"
    CHRISTIAN_MUSIC = "CHRISTIAN_MUSIC"
    COUNTRY_POP = "COUNTRY_POP"
    DANCE_POP = "DANCE_POP"
    DISCO = "DISCO"
    DJ = "DJ"
    DRUM_BASS = "DRUM&BASS"
    DUBSTEP = "DUBSTEP"
    EDM = "EDM"
    FUNK = "FUNK"
    HOUSE = "HOUSE"
    INDIE_POP = "INDIE_POP"
    J_POP = "J-POP"
    K_POP = "K-POP"
    LATIN_POP = "LATIN_POP"
    LO_FI = "LO-FI"
    OLD_SCHOOL = "OLD_SCHOOL"
    PUNK = "PUNK"
    RUSSIAN_POP = "RUSSIAN_POP"
    SOUL = "SOUL"
    SOUNDTRACK = "SOUNDTRACK"
    SYNTH_POP = "SYNTH_POP"
    TECHNO = "TECHNO"
    TEEN_POP = "TEEN_POP"

    __str__ = str.__str__


GenreOrStr: TypeAlias = Annotated[Genre | str, open_enum_validator(Genre)]
