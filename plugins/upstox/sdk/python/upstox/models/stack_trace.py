from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StackTrace(SdkBaseModel):
    class_loader_name: Optional[str] = Field(default=UNSET, alias="classLoaderName")
    module_name: Optional[str] = Field(default=UNSET, alias="moduleName")
    module_version: Optional[str] = Field(default=UNSET, alias="moduleVersion")
    method_name: Optional[str] = Field(default=UNSET, alias="methodName")
    file_name: Optional[str] = Field(default=UNSET, alias="fileName")
    line_number: Optional[int] = Field(default=UNSET, alias="lineNumber")
    class_name: Optional[str] = Field(default=UNSET, alias="className")
    native_method: Optional[bool] = Field(default=UNSET, alias="nativeMethod")


class StackTraceDict(TypedDict):
    class_loader_name: NotRequired[str]
    module_name: NotRequired[str]
    module_version: NotRequired[str]
    method_name: NotRequired[str]
    file_name: NotRequired[str]
    line_number: NotRequired[int]
    class_name: NotRequired[str]
    native_method: NotRequired[bool]
