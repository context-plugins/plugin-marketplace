from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageProjectIdentityResponse2(SdkBaseModel):
    enabled: Literal["False"] = "False"
    disabled: Literal["True"] = "True"


class ApiV1ManageProjectIdentityResponse2Dict(TypedDict):
    enabled: Literal["False"]
    disabled: Literal["True"]
