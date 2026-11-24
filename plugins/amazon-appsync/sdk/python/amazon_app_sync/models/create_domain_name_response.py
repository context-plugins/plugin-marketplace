from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_name_config import DomainNameConfig, DomainNameConfigDict


class CreateDomainNameResponse(SdkBaseModel):
    domain_name_config: Optional[DomainNameConfig] = Field(default=UNSET, alias="domainNameConfig")


class CreateDomainNameResponseDict(TypedDict):
    domain_name_config: NotRequired[DomainNameConfigDict]
