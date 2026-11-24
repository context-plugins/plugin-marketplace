from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageFormsResponsesReleaseResponse(SdkBaseModel):
    released: int


class ApiV1ManageFormsResponsesReleaseResponseDict(TypedDict):
    released: int
