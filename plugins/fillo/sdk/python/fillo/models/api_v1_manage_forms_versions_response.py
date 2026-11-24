from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .form_version import FormVersion, FormVersionDict


class ApiV1ManageFormsVersionsResponse(SdkBaseModel):
    data: list[FormVersion]


class ApiV1ManageFormsVersionsResponseDict(TypedDict):
    data: list[FormVersionDict]
