from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignalsMetadataResponseMeta(SdkBaseModel):
    from_date: str = Field(alias="fromDate")
    to_date: str = Field(alias="toDate")


class SignalsMetadataResponseMetaDict(TypedDict):
    from_date: str
    to_date: str
