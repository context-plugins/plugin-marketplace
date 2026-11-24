from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_amazon_lex_model_building_v2_migrations_api import TypeAmazonLexModelBuildingV2MigrationsApiOrStr


class MigrationAlert(SdkBaseModel):
    type_: Optional[TypeAmazonLexModelBuildingV2MigrationsApiOrStr] = Field(default=UNSET, alias="type")
    """The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration that can't be
    resolved. The migration stops. WARN - There was an issue with the migration that requires manual changes to the new
    Amazon Lex V2 bot. The migration continues."""

    message: Optional[str] = UNSET
    """A message that describes why the alert was issued."""

    details: Optional[list[str]] = UNSET
    """Additional details about the alert."""

    reference_urls: Optional[list[str]] = Field(default=UNSET, alias="referenceURLs")
    """A link to the Amazon Lex documentation that describes how to resolve the alert."""


class MigrationAlertDict(TypedDict):
    type_: NotRequired[TypeAmazonLexModelBuildingV2MigrationsApiOrStr]
    message: NotRequired[str]
    details: NotRequired[list[str]]
    reference_urls: NotRequired[list[str]]
