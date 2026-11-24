from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fleet import Fleet, FleetDict


class BatchGetFleetsOutput(SdkBaseModel):
    fleets: Optional[list[Fleet]] = UNSET
    """Information about the requested compute fleets."""

    fleets_not_found: Optional[list[str]] = Field(default=UNSET, alias="fleetsNotFound")
    """The names of compute fleets for which information could not be found."""


class BatchGetFleetsOutputDict(TypedDict):
    fleets: NotRequired[list[FleetDict]]
    fleets_not_found: NotRequired[list[str]]
