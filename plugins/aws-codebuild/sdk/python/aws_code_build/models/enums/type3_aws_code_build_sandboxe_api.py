from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3AwsCodeBuildSandboxeApi(str, Enum):
    """The type of environment variable. Valid values include: PARAMETER_STORE: An environment variable stored in
    Systems Manager Parameter Store. For environment variables of this type, specify the name of the parameter as the
    value of the EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also
    define Parameter Store environment variables in the buildspec. To learn how to do so, see env/parameter-store in the
    CodeBuild User Guide. PLAINTEXT: An environment variable in plain text format. This is the default value.
    SECRETS_MANAGER: An environment variable sto"""

    PLAINTEXT = "PLAINTEXT"
    PARAMETER_STORE = "PARAMETER_STORE"
    SECRETS_MANAGER = "SECRETS_MANAGER"

    __str__ = str.__str__


Type3AwsCodeBuildSandboxeApiOrStr: TypeAlias = Annotated[
    Type3AwsCodeBuildSandboxeApi | str, open_enum_validator(Type3AwsCodeBuildSandboxeApi)
]
