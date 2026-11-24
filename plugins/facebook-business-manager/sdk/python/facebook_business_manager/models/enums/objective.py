from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Objective(str, Enum):
    """The campaign objective"""

    OUTCOME_AWARENESS = "OUTCOME_AWARENESS"
    OUTCOME_ENGAGEMENT = "OUTCOME_ENGAGEMENT"
    OUTCOME_LEADS = "OUTCOME_LEADS"
    OUTCOME_SALES = "OUTCOME_SALES"
    OUTCOME_TRAFFIC = "OUTCOME_TRAFFIC"
    OUTCOME_APP_PROMOTION = "OUTCOME_APP_PROMOTION"

    __str__ = str.__str__


ObjectiveOrStr: TypeAlias = Annotated[Objective | str, open_enum_validator(Objective)]
