from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageFormsResponsesReleaseRequest(SdkBaseModel):
    """Exactly one of responseIds or all."""

    response_ids: Optional[list[str]] = Field(default=UNSET, alias="responseIds")
    all: Optional[bool] = UNSET


class ApiV1ManageFormsResponsesReleaseRequestDict(TypedDict):
    response_ids: NotRequired[list[str]]
    all: NotRequired[bool]
