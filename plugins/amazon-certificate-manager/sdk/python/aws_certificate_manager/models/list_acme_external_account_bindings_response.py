from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_external_account_binding_summary import (
    AcmeExternalAccountBindingSummary,
    AcmeExternalAccountBindingSummaryDict,
)


class ListAcmeExternalAccountBindingsResponse(SdkBaseModel):
    external_account_bindings: Optional[list[AcmeExternalAccountBindingSummary]] = Field(
        default=UNSET, alias="ExternalAccountBindings"
    )
    """The list of external account bindings."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""


class ListAcmeExternalAccountBindingsResponseDict(TypedDict):
    external_account_bindings: NotRequired[list[AcmeExternalAccountBindingSummaryDict]]
    next_token: NotRequired[str]
