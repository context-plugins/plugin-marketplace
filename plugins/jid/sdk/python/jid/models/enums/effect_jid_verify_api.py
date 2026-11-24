from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EffectJidVerifyApi(str, Enum):
    STOP = "stop"
    REVIEW = "review"

    __str__ = str.__str__


EffectJidVerifyApiOrStr: TypeAlias = Annotated[EffectJidVerifyApi | str, open_enum_validator(EffectJidVerifyApi)]
