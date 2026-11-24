from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .iam_diff import IamDiff, IamDiffDict


class ProgramManagementAccountStatus(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    account_id: str = Field(alias="accountId")
    """12-digit AWS account ID of the program management account."""

    iam_status: str = Field(alias="iamStatus")
    iam_diff: Optional[IamDiff] = Field(default=UNSET, alias="iamDiff")
    """Present when ``iamStatus`` indicates drift. ``null`` when the deployed IAM matches expectations."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """When this account's root record was last updated. ``null`` if never updated."""


class ProgramManagementAccountStatusDict(TypedDict):
    dpma_id: str
    account_id: str
    iam_status: str
    iam_diff: NotRequired[IamDiffDict]
    created_at: RFC3339DateTime
    updated_at: NotRequired[RFC3339DateTime | None]
