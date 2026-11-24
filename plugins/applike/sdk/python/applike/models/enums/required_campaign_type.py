from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequiredCampaignType(str, Enum):
    """The type of campaign you're running. Retargeting campaigns require special set up on partner side to target only
    existing users."""

    ACQUISITION = "acquisition"
    RETARGETING = "retargeting"
    CTV = "ctv"

    __str__ = str.__str__


RequiredCampaignTypeOrStr: TypeAlias = Annotated[RequiredCampaignType | str, open_enum_validator(RequiredCampaignType)]
