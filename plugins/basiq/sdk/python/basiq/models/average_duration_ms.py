from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AverageDurationMs(SdkBaseModel):
    """AverageDurationMs average connector duration in milliseconds per segments. When durations are not known for
    institution this field will be ``null``."""

    retrieve_accounts: Optional[int] = Field(default=UNSET, alias="retrieveAccounts")
    """Connector average duration in milliseconds of <b>fetch accounts</b> step for institution"""

    retrieve_meta: Optional[int] = Field(default=UNSET, alias="retrieveMeta")
    """Connector average duration in milliseconds of <b>fetch metadata</b> step for institution"""

    retrieve_transactions: Optional[int] = Field(default=UNSET, alias="retrieveTransactions")
    """Connector average duration in milliseconds of <b>fetch transactions</b> step for institution"""

    total: Optional[int] = UNSET
    """Total connector average duration in milliseconds"""

    verify_credentials: Optional[int] = Field(default=UNSET, alias="verifyCredentials")
    """Connector average duration in milliseconds of <b>verifiy credentials</b> step for institution"""


class AverageDurationMsDict(TypedDict):
    retrieve_accounts: NotRequired[int]
    retrieve_meta: NotRequired[int]
    retrieve_transactions: NotRequired[int]
    total: NotRequired[int]
    verify_credentials: NotRequired[int]
