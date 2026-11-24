from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OrganizationResourceCollectionType(str, Enum):
    """An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources
    are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services
    CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru
    can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged
    using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks."""

    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION"
    AWS_SERVICE = "AWS_SERVICE"
    AWS_ACCOUNT = "AWS_ACCOUNT"
    AWS_TAGS = "AWS_TAGS"

    __str__ = str.__str__


OrganizationResourceCollectionTypeOrStr: TypeAlias = Annotated[
    OrganizationResourceCollectionType | str, open_enum_validator(OrganizationResourceCollectionType)
]
