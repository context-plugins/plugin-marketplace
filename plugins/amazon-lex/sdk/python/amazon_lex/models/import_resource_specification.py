from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_import_specification import BotImportSpecification, BotImportSpecificationDict
from .bot_locale_import_specification import BotLocaleImportSpecification, BotLocaleImportSpecificationDict
from .custom_vocabulary_import_specification import (
    CustomVocabularyImportSpecification,
    CustomVocabularyImportSpecificationDict,
)
from .test_set_import_resource_specification import (
    TestSetImportResourceSpecification,
    TestSetImportResourceSpecificationDict,
)


class ImportResourceSpecification(SdkBaseModel):
    bot_import_specification: Optional[BotImportSpecification] = Field(default=UNSET, alias="botImportSpecification")
    bot_locale_import_specification: Optional[BotLocaleImportSpecification] = Field(
        default=UNSET, alias="botLocaleImportSpecification"
    )
    custom_vocabulary_import_specification: Optional[CustomVocabularyImportSpecification] = Field(
        default=UNSET, alias="customVocabularyImportSpecification"
    )
    test_set_import_resource_specification: Optional[TestSetImportResourceSpecification] = Field(
        default=UNSET, alias="testSetImportResourceSpecification"
    )


class ImportResourceSpecificationDict(TypedDict):
    bot_import_specification: NotRequired[BotImportSpecificationDict]
    bot_locale_import_specification: NotRequired[BotLocaleImportSpecificationDict]
    custom_vocabulary_import_specification: NotRequired[CustomVocabularyImportSpecificationDict]
    test_set_import_resource_specification: NotRequired[TestSetImportResourceSpecificationDict]
