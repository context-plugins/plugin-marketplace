from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntrospectionConfig(str, Enum):
    """Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no value is
    provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the
    operation attempts to use the introspection feature while this field is disabled. For more information about
    introspection, see GraphQL introspection."""

    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


IntrospectionConfigOrStr: TypeAlias = Annotated[IntrospectionConfig | str, open_enum_validator(IntrospectionConfig)]
