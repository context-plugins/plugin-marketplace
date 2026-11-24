from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Transition(SdkBaseModel):
    target: str
    """Key of the node this transition points at."""

    label: OptionalNullable[str] = UNSET
    path_id: OptionalNullable[str] = Field(default=UNSET, alias="pathId")


class TransitionDict(TypedDict):
    target: str
    label: NotRequired[str | None]
    path_id: NotRequired[str | None]
