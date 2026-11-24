from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .process_property import ProcessProperty, ProcessPropertyDict


class ExecutionRequest(SdkBaseModel):
    """Request to execute an integration process on a specific Atom."""

    atom_id: str = Field(alias="atomId")
    """ID of the Atom on which to run the process."""

    process_id: str = Field(alias="processId")
    """ID of the process to execute."""

    process_properties: Optional[list[ProcessProperty]] = Field(default=UNSET, alias="processProperties")
    """Optional runtime properties to pass to the process."""


class ExecutionRequestDict(TypedDict):
    atom_id: str
    process_id: str
    process_properties: NotRequired[list[ProcessPropertyDict]]
