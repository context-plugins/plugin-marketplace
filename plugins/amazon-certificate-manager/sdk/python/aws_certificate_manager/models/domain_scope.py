from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.exact_domain import ExactDomainOrStr
from .enums.subdomains import SubdomainsOrStr
from .enums.wildcards import WildcardsOrStr


class DomainScope(SdkBaseModel):
    exact_domain: Optional[ExactDomainOrStr] = Field(default=UNSET, alias="ExactDomain")
    """Whether validation applies to the exact domain."""

    subdomains: Optional[SubdomainsOrStr] = Field(default=UNSET, alias="Subdomains")
    """Whether validation applies to subdomains."""

    wildcards: Optional[WildcardsOrStr] = Field(default=UNSET, alias="Wildcards")
    """Whether validation applies to wildcard domains."""


class DomainScopeDict(TypedDict):
    exact_domain: NotRequired[ExactDomainOrStr]
    subdomains: NotRequired[SubdomainsOrStr]
    wildcards: NotRequired[WildcardsOrStr]
