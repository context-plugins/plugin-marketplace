from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.apply_status import ApplyStatusOrStr
from .enums.import_status import ImportStatusOrStr


class ConfigurationPackage(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    """The package code"""

    package_name: Optional[str] = Field(default=UNSET, alias="packageName")
    """The package name"""

    language_id: Optional[int] = Field(default=UNSET, alias="languageId")
    product_version: Optional[str] = Field(default=UNSET, alias="productVersion")
    processing_order: Optional[int] = Field(default=UNSET, alias="processingOrder")
    exclude_configuration_tables: Optional[bool] = Field(default=UNSET, alias="excludeConfigurationTables")
    number_of_tables: Optional[int] = Field(default=UNSET, alias="numberOfTables")
    number_of_records: Optional[int] = Field(default=UNSET, alias="numberOfRecords")
    number_of_errors: Optional[int] = Field(default=UNSET, alias="numberOfErrors")
    import_status: Optional[ImportStatusOrStr] = Field(default=UNSET, alias="importStatus")
    apply_status: Optional[ApplyStatusOrStr] = Field(default=UNSET, alias="applyStatus")


class ConfigurationPackageDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    package_name: NotRequired[str]
    language_id: NotRequired[int]
    product_version: NotRequired[str]
    processing_order: NotRequired[int]
    exclude_configuration_tables: NotRequired[bool]
    number_of_tables: NotRequired[int]
    number_of_records: NotRequired[int]
    number_of_errors: NotRequired[int]
    import_status: NotRequired[ImportStatusOrStr]
    apply_status: NotRequired[ApplyStatusOrStr]
