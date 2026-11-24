from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisassociateConnectionsFromResiliencyGroupRequest(SdkBaseModel):
    connection_identifiers: list[str] = Field(alias="connectionIdentifiers")
    """The IDs or ARNs of the connections to disassociate from the resiliency group."""

    resiliency_group_id: str = Field(alias="resiliencyGroupId")
    """The ID of the resiliency group."""

    client_token: Optional[str] = Field(default=UNSET, alias="clientToken")
    """A unique, case-sensitive identifier that you provide to ensure the idempotency of the request."""


class DisassociateConnectionsFromResiliencyGroupRequestDict(TypedDict):
    connection_identifiers: list[str]
    resiliency_group_id: str
    client_token: NotRequired[str]
