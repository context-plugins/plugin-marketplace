from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1AiSystemsTransitionsRequest(SdkBaseModel):
    transition: str
    """The step's id, from the record's steps: submit or withdraw for an agent; every other step is a person's, in the
    app"""

    reason: OptionalNullable[str] = UNSET


class ApiV1AiSystemsTransitionsRequestDict(TypedDict):
    transition: str
    reason: NotRequired[str | None]
