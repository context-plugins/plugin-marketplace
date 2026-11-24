from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .handshake_status import HandshakeStatus, HandshakeStatusDict
from .iam_diff import IamDiff, IamDiffDict
from .mapped_tenant import MappedTenant, MappedTenantDict


class ProgramManagementAccount(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    account_id: str = Field(alias="accountId")
    """12-digit AWS account ID of the program management account."""

    role_arn: str = Field(alias="roleArn")
    stack_name: str = Field(alias="stackName")
    region: str
    iam_status: str = Field(alias="iamStatus")
    iam_diff: Optional[IamDiff] = Field(default=UNSET, alias="iamDiff")
    """Present when ``iamStatus`` indicates drift. ``null`` when the deployed IAM matches expectations."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    last_refresh_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastRefreshTime")
    """When this account's handshake/tenant state was last refreshed. ``null`` if never refreshed."""

    tenants: list[MappedTenant]
    handshake_status: HandshakeStatus = Field(alias="handshakeStatus")
    """Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA."""


class ProgramManagementAccountDict(TypedDict):
    dpma_id: str
    account_id: str
    role_arn: str
    stack_name: str
    region: str
    iam_status: str
    iam_diff: NotRequired[IamDiffDict]
    created_at: RFC3339DateTime
    last_refresh_time: NotRequired[RFC3339DateTime | None]
    tenants: list[MappedTenantDict]
    handshake_status: HandshakeStatusDict
