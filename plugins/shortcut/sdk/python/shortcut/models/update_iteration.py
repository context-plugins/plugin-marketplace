from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_label_params import CreateLabelParams, CreateLabelParamsDict


class UpdateIteration(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    follower_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Members you want to add as Followers."""

    group_ids: Optional[list[UUID]] = UNSET
    """An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented
    in our web UI."""

    labels: Optional[list[CreateLabelParams]] = UNSET
    """An array of Labels attached to the Iteration."""

    description: Optional[str] = UNSET
    """The description of the Iteration."""

    name: Optional[str] = UNSET
    """The name of this Iteration"""

    start_date: Optional[str] = UNSET
    """The date this Iteration begins, e.g. 2019-07-01"""

    end_date: Optional[str] = UNSET
    """The date this Iteration ends, e.g. 2019-07-05."""


class UpdateIterationDict(TypedDict):
    follower_ids: NotRequired[list[UUID]]
    group_ids: NotRequired[list[UUID]]
    labels: NotRequired[list[CreateLabelParamsDict]]
    description: NotRequired[str]
    name: NotRequired[str]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
