from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ManageRespondentsRequest(SdkBaseModel):
    confirm: str
    """The respondent's exact external id."""

    also_responses: Optional[bool] = Field(default=UNSET, alias="alsoResponses")
    """Also erase every response they submitted, with its files."""


class ApiV1ManageRespondentsRequestDict(TypedDict):
    confirm: str
    also_responses: NotRequired[bool]
