from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PhoneResource(SdkBaseModel):
    type_: str | None = Field(alias="type")
    value: str | None


class PhoneResourceDict(TypedDict):
    type_: str | None
    value: str | None
