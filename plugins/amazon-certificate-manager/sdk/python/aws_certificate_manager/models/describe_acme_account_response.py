from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_account import AcmeAccount, AcmeAccountDict


class DescribeAcmeAccountResponse(SdkBaseModel):
    acme_account: Optional[AcmeAccount] = Field(default=UNSET, alias="AcmeAccount")


class DescribeAcmeAccountResponseDict(TypedDict):
    acme_account: NotRequired[AcmeAccountDict]
