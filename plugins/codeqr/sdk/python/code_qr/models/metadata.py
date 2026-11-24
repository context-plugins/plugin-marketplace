from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Metadata(SdkBaseModel):
    default_domains: list[str] = Field(alias="defaultDomains")


class MetadataDict(TypedDict):
    default_domains: list[str]
