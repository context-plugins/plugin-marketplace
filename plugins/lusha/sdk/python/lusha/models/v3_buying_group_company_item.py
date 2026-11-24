from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3BuyingGroupCompanyItem(SdkBaseModel):
    """Identifies one target company. Provide exactly one of domain or id."""

    client_reference_id: Optional[str] = Field(default=UNSET, alias="clientReferenceId")
    """Optional caller-supplied token, echoed back on the matching result."""

    domain: Optional[str] = UNSET
    id: Optional[str] = UNSET
    """Lusha company ID."""


class V3BuyingGroupCompanyItemDict(TypedDict):
    client_reference_id: NotRequired[str]
    domain: NotRequired[str]
    id: NotRequired[str]
