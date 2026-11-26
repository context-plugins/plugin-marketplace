from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RequiredFeature(str, Enum):
    ATTRIBUTION = "attribution"
    CAMPAIGN = "campaign"
    CREATIVE = "creative"
    SPEND_IMPORT = "spend-import"
    SKAD_IMPORT = "skad-import"
    POSTBACK = "postback"

    __str__ = str.__str__


RequiredFeatureOrStr: TypeAlias = Annotated[RequiredFeature | str, open_enum_validator(RequiredFeature)]
