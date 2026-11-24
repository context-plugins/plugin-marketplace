from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BaseTaskParams(SdkBaseModel):
    """Request parameters for specifying how to pre-populate a task through a template."""

    model_config = ConfigDict(extra="forbid")

    description: str
    """The Task description."""

    complete: Optional[bool] = UNSET
    """True/false boolean indicating whether the Task is completed. Defaults to false."""

    owner_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any members you want to add as Owners on this new Task."""

    external_id: Optional[str] = UNSET
    """This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID
    in the other tool can be indicated here."""


class BaseTaskParamsDict(TypedDict):
    description: str
    complete: NotRequired[bool]
    owner_ids: NotRequired[list[UUID]]
    external_id: NotRequired[str]
