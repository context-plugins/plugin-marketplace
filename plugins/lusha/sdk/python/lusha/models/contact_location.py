from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ContactLocation(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    country: OptionalNullable[str] = UNSET
    state: OptionalNullable[str] = UNSET
    city: OptionalNullable[str] = UNSET


class ContactLocationDict(TypedDict):
    country: NotRequired[str | None]
    state: NotRequired[str | None]
    city: NotRequired[str | None]
