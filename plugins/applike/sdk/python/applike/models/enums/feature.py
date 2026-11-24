from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feature(str, Enum):
    ATTRIBUTION = "attribution"
    CAMPAIGN = "campaign"
    CREATIVE = "creative"
    SPEND_IMPORT = "spend-import"
    SKAD_IMPORT = "skad-import"
    POSTBACK = "postback"

    __str__ = str.__str__


FeatureOrStr: TypeAlias = Annotated[Feature | str, open_enum_validator(Feature)]
