from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CustomerStateProductRef(SdkBaseModel):
    id: str
    external_id: str | None = Field(alias="externalId")
    name: str


class CustomerStateProductRefDict(TypedDict):
    id: str
    external_id: str | None
    name: str
