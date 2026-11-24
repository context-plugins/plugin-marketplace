from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status2 import Status2OrStr


class DomainInfo(SdkBaseModel):
    name: str
    """The name of the domain. This name is unique within the account."""

    status: Status2OrStr
    """The status of the domain: REGISTERED – The domain is properly registered and available. You can use this domain
    for registering types and creating new workflow executions. DEPRECATED – The domain was deprecated using
    DeprecateDomain, but is still in use. You should not create new workflow executions in this domain."""

    description: Optional[str] = UNSET
    """The description of the domain provided through RegisterDomain."""

    arn: Optional[str] = UNSET
    """The ARN of the domain."""


class DomainInfoDict(TypedDict):
    name: str
    status: Status2OrStr
    description: NotRequired[str]
    arn: NotRequired[str]
