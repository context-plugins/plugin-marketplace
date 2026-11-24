from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_account_summary import AcmeAccountSummary, AcmeAccountSummaryDict


class ListAcmeAccountsResponse(SdkBaseModel):
    acme_accounts: Optional[list[AcmeAccountSummary]] = Field(default=UNSET, alias="AcmeAccounts")
    """The list of ACME accounts."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""


class ListAcmeAccountsResponseDict(TypedDict):
    acme_accounts: NotRequired[list[AcmeAccountSummaryDict]]
    next_token: NotRequired[str]
