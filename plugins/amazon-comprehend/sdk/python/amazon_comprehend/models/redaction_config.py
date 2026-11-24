from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mask_mode import MaskModeOrStr
from .enums.pii_entity_type import PiiEntityTypeOrStr


class RedactionConfig(SdkBaseModel):
    pii_entity_types: Optional[list[PiiEntityTypeOrStr]] = Field(default=UNSET, alias="PiiEntityTypes")
    """An array of the types of PII entities that Amazon Comprehend detects in the input text for your request."""

    mask_mode: Optional[MaskModeOrStr] = Field(default=UNSET, alias="MaskMode")
    """Specifies whether the PII entity is redacted with the mask character or the entity type."""

    mask_character: Optional[str] = Field(default=UNSET, alias="MaskCharacter")
    """A character that replaces each character in the redacted PII entity."""


class RedactionConfigDict(TypedDict):
    pii_entity_types: NotRequired[list[PiiEntityTypeOrStr]]
    mask_mode: NotRequired[MaskModeOrStr]
    mask_character: NotRequired[str]
