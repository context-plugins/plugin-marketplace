from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.type_juri_sign_templates_api import TypeJuriSignTemplatesApi, TypeJuriSignTemplatesApiOrStr


class SignatureZoneJuriSignTemplatesApi(SdkBaseModel):
    page: Optional[int] = UNSET
    x: Optional[float] = UNSET
    y: Optional[float] = UNSET
    width: Optional[float] = UNSET
    height: Optional[float] = UNSET
    type_: TypeJuriSignTemplatesApiOrStr = Field(default=TypeJuriSignTemplatesApi.SIGNATURE, alias="type")
    label: OptionalNullable[str] = UNSET
    """Instruction shown to the signer for text/checkbox fields"""

    required: bool = True
    """Whether a text/checkbox field must be filled before the signer can sign"""

    value: OptionalNullable[str] = UNSET
    """Value entered by the signer (text/checkbox) or auto-filled date. Populated only once the sign request is
    signed."""


class SignatureZoneJuriSignTemplatesApiDict(TypedDict):
    page: NotRequired[int]
    x: NotRequired[float]
    y: NotRequired[float]
    width: NotRequired[float]
    height: NotRequired[float]
    type_: NotRequired[TypeJuriSignTemplatesApiOrStr]
    label: NotRequired[str | None]
    required: NotRequired[bool]
    value: NotRequired[str | None]
