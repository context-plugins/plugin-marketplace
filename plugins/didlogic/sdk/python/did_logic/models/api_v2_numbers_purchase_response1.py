from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .errors_model import ErrorsModel, ErrorsModelDict
from .purchase2 import Purchase2, Purchase2Dict


class ApiV2NumbersPurchaseResponse1(SdkBaseModel):
    errors: Optional[ErrorsModel] = UNSET
    purchase: Optional[Purchase2] = UNSET
    """Purchase response object"""


class ApiV2NumbersPurchaseResponse1Dict(TypedDict):
    errors: NotRequired[ErrorsModelDict]
    purchase: NotRequired[Purchase2Dict]
