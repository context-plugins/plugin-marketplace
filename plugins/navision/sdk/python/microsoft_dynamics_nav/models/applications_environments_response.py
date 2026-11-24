from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_model import EnvironmentModel, EnvironmentModelDict


class ApplicationsEnvironmentsResponse(SdkBaseModel):
    value: Optional[list[EnvironmentModel]] = UNSET


class ApplicationsEnvironmentsResponseDict(TypedDict):
    value: NotRequired[list[EnvironmentModelDict]]
