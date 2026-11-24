from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_commonelements_com_association_resources_api import (
    DatumCommonelementsComAssociationResourcesApi,
    DatumCommonelementsComAssociationResourcesApiDict,
)


class ApiV1AssociationsViolationsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: list[DatumCommonelementsComAssociationResourcesApi]


class ApiV1AssociationsViolationsResponseDict(TypedDict):
    ok: Literal["True"]
    data: list[DatumCommonelementsComAssociationResourcesApiDict]
