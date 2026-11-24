from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1PlaybooksStartRequest(SdkBaseModel):
    title: Optional[str] = UNSET
    """A name for this run, such as Onboard Northwind; the playbook's title when omitted"""

    inputs: Optional[dict[str, str]] = UNSET
    """The playbook's inputs, by name"""

    workspace_id: Optional[UUID] = Field(default=UNSET, alias="workspaceId")
    flow_id: Optional[UUID] = Field(default=UNSET, alias="flowId")
    """The project this run's approvals and reviews belong to"""

    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    """Your own reference; an open run you started under it is returned instead of a second"""

    session_url: Optional[str] = Field(default=UNSET, alias="sessionUrl")


class ApiV1PlaybooksStartRequestDict(TypedDict):
    title: NotRequired[str]
    inputs: NotRequired[dict[str, str]]
    workspace_id: NotRequired[UUID]
    flow_id: NotRequired[UUID]
    external_id: NotRequired[str]
    session_url: NotRequired[str]
