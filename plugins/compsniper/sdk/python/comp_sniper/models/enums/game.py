from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Game(str, Enum):
    """Game to list every set for"""

    POKEMON = "pokemon"
    ONE_PIECE = "one-piece"
    MAGIC = "magic"
    YUGIOH = "yugioh"
    DRAGON_BALL = "dragon-ball"
    LORCANA = "lorcana"
    DIGIMON = "digimon"
    WEISS_SCHWARZ = "weiss-schwarz"
    UNION_ARENA = "union-arena"
    FLESH_AND_BLOOD = "flesh-and-blood"
    STAR_WARS_UNLIMITED = "star-wars-unlimited"
    CARDFIGHT_VANGUARD = "cardfight-vanguard"
    DUEL_MASTERS = "duel-masters"
    BATTLE_SPIRITS = "battle-spirits"
    FINAL_FANTASY = "final-fantasy"
    GUNDAM = "gundam"
    SHADOWVERSE = "shadowverse"
    RIFTBOUND = "riftbound"
    GRAND_ARCHIVE = "grand-archive"
    WIXOSS = "wixoss"

    __str__ = str.__str__


GameOrStr: TypeAlias = Annotated[Game | str, open_enum_validator(Game)]
