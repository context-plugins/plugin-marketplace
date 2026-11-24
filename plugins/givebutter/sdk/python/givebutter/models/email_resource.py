from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EmailResource(SdkBaseModel):
    type_: str | None = Field(alias="type")
    value: str | None


class EmailResourceDict(TypedDict):
    type_: str | None
    value: str | None
