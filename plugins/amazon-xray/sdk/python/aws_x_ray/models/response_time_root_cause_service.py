from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_time_root_cause_entity import ResponseTimeRootCauseEntity, ResponseTimeRootCauseEntityDict


class ResponseTimeRootCauseService(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The service name."""

    names: Optional[list[str]] = Field(default=UNSET, alias="Names")
    """A collection of associated service names."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type associated to the service."""

    account_id: Optional[str] = Field(default=UNSET, alias="AccountId")
    """The account ID associated to the service."""

    entity_path: Optional[list[ResponseTimeRootCauseEntity]] = Field(default=UNSET, alias="EntityPath")
    """The path of root cause entities found on the service."""

    inferred: Optional[bool] = Field(default=UNSET, alias="Inferred")
    """A Boolean value indicating if the service is inferred from the trace."""


class ResponseTimeRootCauseServiceDict(TypedDict):
    name: NotRequired[str]
    names: NotRequired[list[str]]
    type_: NotRequired[str]
    account_id: NotRequired[str]
    entity_path: NotRequired[list[ResponseTimeRootCauseEntityDict]]
    inferred: NotRequired[bool]
