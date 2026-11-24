from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_export_specification import BotExportSpecification, BotExportSpecificationDict
from .bot_locale_export_specification import BotLocaleExportSpecification, BotLocaleExportSpecificationDict
from .custom_vocabulary_export_specification import (
    CustomVocabularyExportSpecification,
    CustomVocabularyExportSpecificationDict,
)
from .test_set_export_specification import TestSetExportSpecification, TestSetExportSpecificationDict


class ExportResourceSpecification(SdkBaseModel):
    bot_export_specification: Optional[BotExportSpecification] = Field(default=UNSET, alias="botExportSpecification")
    bot_locale_export_specification: Optional[BotLocaleExportSpecification] = Field(
        default=UNSET, alias="botLocaleExportSpecification"
    )
    custom_vocabulary_export_specification: Optional[CustomVocabularyExportSpecification] = Field(
        default=UNSET, alias="customVocabularyExportSpecification"
    )
    test_set_export_specification: Optional[TestSetExportSpecification] = Field(
        default=UNSET, alias="testSetExportSpecification"
    )


class ExportResourceSpecificationDict(TypedDict):
    bot_export_specification: NotRequired[BotExportSpecificationDict]
    bot_locale_export_specification: NotRequired[BotLocaleExportSpecificationDict]
    custom_vocabulary_export_specification: NotRequired[CustomVocabularyExportSpecificationDict]
    test_set_export_specification: NotRequired[TestSetExportSpecificationDict]
