from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_name_config import DomainNameConfig, DomainNameConfigDict


class ListDomainNamesResponse(SdkBaseModel):
    domain_name_configs: Optional[list[DomainNameConfig]] = Field(default=UNSET, alias="domainNameConfigs")
    """Lists configurations for multiple domain names."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListDomainNamesResponseDict(TypedDict):
    domain_name_configs: NotRequired[list[DomainNameConfigDict]]
    next_token: NotRequired[str]
