from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    BUNDLE_SCHEMA_INVALID = "bundle_schema_invalid"
    BUNDLE_VERSION_UNSUPPORTED = "bundle_version_unsupported"
    BUNDLE_LIMITS_EXCEEDED = "bundle_limits_exceeded"
    BINDING_NOT_FOUND = "binding_not_found"
    BINDING_PROVIDER_MISMATCH = "binding_provider_mismatch"
    TABLE_SCHEMA_INCOMPATIBLE = "table_schema_incompatible"
    GLOBAL_VARIABLE_TYPE_CONFLICT = "global_variable_type_conflict"
    INTERNAL_FIELD_REJECTED = "internal_field_rejected"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
