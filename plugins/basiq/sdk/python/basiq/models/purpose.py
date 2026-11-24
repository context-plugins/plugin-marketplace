from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .primary import Primary, PrimaryDict


class Purpose(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    primary: Primary
    other: OptionalNullable[bool] = UNSET


class PurposeDict(TypedDict):
    primary: PrimaryDict
    other: NotRequired[bool | None]
