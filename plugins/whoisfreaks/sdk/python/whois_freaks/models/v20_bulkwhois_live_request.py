from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V20BulkwhoisLiveRequest(SdkBaseModel):
    domain_names: list[str] = Field(alias="domainNames")


class V20BulkwhoisLiveRequestDict(TypedDict):
    domain_names: list[str]
