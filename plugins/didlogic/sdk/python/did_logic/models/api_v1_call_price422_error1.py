from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class ApiV1CallPrice422Error1(SdkBaseModel):
    error: Error2


class ApiV1CallPrice422Error1Dict(TypedDict):
    error: Error2Dict
