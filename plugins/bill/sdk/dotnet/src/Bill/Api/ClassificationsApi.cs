using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.ClassificationsApi;

namespace Bill.Api;

public sealed class ClassificationsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ClassificationsApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Archive an accounting class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing accounting class. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationAccountingClassResponseDto> ArchiveClassificationAccountingClass(ArchiveClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationAccountingClassResponseDto>(),
            ArchiveClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing chart of accounts. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationChartOfAccountsResponseDto> ArchiveClassificationChartOfAccounts(ArchiveClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationChartOfAccountsResponseDto>(),
            ArchiveClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a department
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing department. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationDepartmentResponseDto> ArchiveClassificationDepartment(ArchiveClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationDepartmentResponseDto>(),
            ArchiveClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive an employee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing employee. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationEmployeeResponseDto> ArchiveClassificationEmployee(ArchiveClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationEmployeeResponseDto>(),
            ArchiveClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive an item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing item. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationItemResponseDto> ArchiveClassificationItem(ArchiveClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationItemResponseDto>(),
            ArchiveClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing job. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationJobResponseDto> ArchiveClassificationJob(ArchiveClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationJobResponseDto>(),
            ArchiveClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive a location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive an existing location. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationLocationResponseDto> ArchiveClassificationLocation(ArchiveClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationLocationResponseDto>(),
            ArchiveClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple accounting classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple accounting classes with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationAccountingClassBulkResponseDto> BulkArchiveClassificationAccountingClass(BulkArchiveClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationAccountingClassBulkResponseDto>(),
            BulkArchiveClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple chart of accounts with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationChartOfAccountsBulkResponseDto> BulkArchiveClassificationChartOfAccounts(BulkArchiveClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationChartOfAccountsBulkResponseDto>(),
            BulkArchiveClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple departments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple departments with one API request. In the response, the <c>archived</c> field is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationDepartmentBulkResponseDto> BulkArchiveClassificationDepartment(BulkArchiveClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationDepartmentBulkResponseDto>(),
            BulkArchiveClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple employees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple employees with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationEmployeeBulkResponseDto> BulkArchiveClassificationEmployee(BulkArchiveClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationEmployeeBulkResponseDto>(),
            BulkArchiveClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple items with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationItemBulkResponseDto> BulkArchiveClassificationItem(BulkArchiveClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationItemBulkResponseDto>(),
            BulkArchiveClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple jobs with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationJobBulkResponseDto> BulkArchiveClassificationJob(BulkArchiveClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationJobBulkResponseDto>(),
            BulkArchiveClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive multiple locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkArchiveClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive multiple locations with one API request. In the response, the <c>archived</c> field for each object is set as <c>true</c>.
    /// </remarks>
    public Task<ClassificationLocationBulkResponseDto> BulkArchiveClassificationLocation(BulkArchiveClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/bulk/archive"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationLocationBulkResponseDto>(),
            BulkArchiveClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple accounting classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one <c>POST /v3/classifications/accounting-classes/bulk</c> request.
    /// </remarks>
    public Task<ClassificationAccountingClassBulkResponseDto> BulkCreateClassificationAccountingClass(BulkCreateClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationAccountingClassBulkResponseDto>(),
            BulkCreateClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one <c>POST /v3/classifications/chart-of-accounts/bulk</c> request.
    /// </remarks>
    public Task<ClassificationChartOfAccountsBulkResponseDto> BulkCreateClassificationChartOfAccounts(BulkCreateClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationChartOfAccountsBulkResponseDto>(),
            BulkCreateClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple departments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple departments with one API request. You can create up to 50 departments with one <c>POST /v3/classifications/departments/bulk</c> request.
    /// </remarks>
    public Task<ClassificationDepartmentBulkResponseDto> BulkCreateClassificationDepartment(BulkCreateClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationDepartmentBulkResponseDto>(),
            BulkCreateClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple employees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple employees with one API request. You can create up to 50 employees with one <c>POST /v3/classifications/employees/bulk</c> request.
    /// </remarks>
    public Task<ClassificationEmployeeBulkResponseDto> BulkCreateClassificationEmployee(BulkCreateClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationEmployeeBulkResponseDto>(),
            BulkCreateClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple items with one API request. You can create up to 50 items with one <c>POST /v3/classifications/items/bulk</c> request.
    /// </remarks>
    public Task<ClassificationItemBulkResponseDto> BulkCreateClassificationItem(BulkCreateClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationItemBulkResponseDto>(),
            BulkCreateClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple jobs with one API request. You can create up to 50 jobs with one <c>POST /v3/classifications/jobs/bulk</c> request.
    /// </remarks>
    public Task<ClassificationJobBulkResponseDto> BulkCreateClassificationJob(BulkCreateClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationJobBulkResponseDto>(),
            BulkCreateClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create multiple locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkCreateClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple locations with one API request. You can create up to 50 locations with one <c>POST /v3/classifications/locations/bulk</c> request.
    /// </remarks>
    public Task<ClassificationLocationBulkResponseDto> BulkCreateClassificationLocation(BulkCreateClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationLocationBulkResponseDto>(),
            BulkCreateClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple accounting classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple accounting classes with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationAccountingClassBulkResponseDto> BulkRestoreClassificationAccountingClass(BulkRestoreClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationAccountingClassBulkResponseDto>(),
            BulkRestoreClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple chart of accounts with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationChartOfAccountsBulkResponseDto> BulkRestoreClassificationChartOfAccounts(BulkRestoreClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationChartOfAccountsBulkResponseDto>(),
            BulkRestoreClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple departments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple departments with one API request. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationDepartmentBulkResponseDto> BulkRestoreClassificationDepartment(BulkRestoreClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationDepartmentBulkResponseDto>(),
            BulkRestoreClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple employees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple employees with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationEmployeeBulkResponseDto> BulkRestoreClassificationEmployee(BulkRestoreClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationEmployeeBulkResponseDto>(),
            BulkRestoreClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple items with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationItemBulkResponseDto> BulkRestoreClassificationItem(BulkRestoreClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationItemBulkResponseDto>(),
            BulkRestoreClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple jobs with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationJobBulkResponseDto> BulkRestoreClassificationJob(BulkRestoreClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationJobBulkResponseDto>(),
            BulkRestoreClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore multiple locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkRestoreClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore multiple locations with one API request. In the response, the <c>archived</c> field for each object is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationLocationBulkResponseDto> BulkRestoreClassificationLocation(BulkRestoreClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/bulk/restore"),
            [],
            [new Param("ids", request.Ids)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationLocationBulkResponseDto>(),
            BulkRestoreClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple accounting classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple accounting classes with one API request.
    /// </remarks>
    public Task<ClassificationAccountingClassBulkResponseDto> BulkUpdateClassificationAccountingClass(BulkUpdateClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationAccountingClassBulkResponseDto>(),
            BulkUpdateClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple chart of accounts with one API request.
    /// </remarks>
    public Task<ClassificationChartOfAccountsBulkResponseDto> BulkUpdateClassificationChartOfAccounts(BulkUpdateClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationChartOfAccountsBulkResponseDto>(),
            BulkUpdateClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple departments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update multiple departments with one API request.
    /// </remarks>
    public Task<ClassificationDepartmentBulkResponseDto> BulkUpdateClassificationDepartment(BulkUpdateClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationDepartmentBulkResponseDto>(),
            BulkUpdateClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple employees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple employees with one API request.
    /// </remarks>
    public Task<ClassificationEmployeeBulkResponseDto> BulkUpdateClassificationEmployee(BulkUpdateClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationEmployeeBulkResponseDto>(),
            BulkUpdateClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple items with one API request.
    /// </remarks>
    public Task<ClassificationItemBulkResponseDto> BulkUpdateClassificationItem(BulkUpdateClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationItemBulkResponseDto>(),
            BulkUpdateClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple jobs with one API request.
    /// </remarks>
    public Task<ClassificationJobBulkResponseDto> BulkUpdateClassificationJob(BulkUpdateClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationJobBulkResponseDto>(),
            BulkUpdateClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update multiple locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationBulkResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkUpdateClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about multiple locations with one API request.
    /// </remarks>
    public Task<ClassificationLocationBulkResponseDto> BulkUpdateClassificationLocation(BulkUpdateClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/bulk"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationLocationBulkResponseDto>(),
            BulkUpdateClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an accounting class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new accounting class.
    /// </remarks>
    public Task<ClassificationAccountingClassResponseDto> CreateClassificationAccountingClass(CreateClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationAccountingClassResponseDto>(),
            CreateClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new chart of accounts.
    /// </remarks>
    public Task<ClassificationChartOfAccountsResponseDto> CreateClassificationChartOfAccounts(CreateClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationChartOfAccountsResponseDto>(),
            CreateClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a department
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new department.
    /// </remarks>
    public Task<ClassificationDepartmentResponseDto> CreateClassificationDepartment(CreateClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationDepartmentResponseDto>(),
            CreateClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an employee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new employee.
    /// </remarks>
    public Task<ClassificationEmployeeResponseDto> CreateClassificationEmployee(CreateClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationEmployeeResponseDto>(),
            CreateClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new item.
    /// </remarks>
    public Task<ClassificationItemResponseDto> CreateClassificationItem(CreateClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationItemResponseDto>(),
            CreateClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new job.
    /// </remarks>
    public Task<ClassificationJobResponseDto> CreateClassificationJob(CreateClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationJobResponseDto>(),
            CreateClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new location.
    /// </remarks>
    public Task<ClassificationLocationResponseDto> CreateClassificationLocation(CreateClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationLocationResponseDto>(),
            CreateClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get accounting class details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing accounting class.
    /// </remarks>
    public Task<ClassificationAccountingClassResponseDto> GetClassificationAccountingClass(GetClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationAccountingClassResponseDto>(),
            GetClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get chart of accounts details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing chart of accounts.
    /// </remarks>
    public Task<ClassificationChartOfAccountsResponseDto> GetClassificationChartOfAccounts(GetClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationChartOfAccountsResponseDto>(),
            GetClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get department details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing department.
    /// </remarks>
    public Task<ClassificationDepartmentResponseDto> GetClassificationDepartment(GetClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationDepartmentResponseDto>(),
            GetClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get employee details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing employee.
    /// </remarks>
    public Task<ClassificationEmployeeResponseDto> GetClassificationEmployee(GetClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationEmployeeResponseDto>(),
            GetClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get item details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing item.
    /// </remarks>
    public Task<ClassificationItemResponseDto> GetClassificationItem(GetClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationItemResponseDto>(),
            GetClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get job details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing job.
    /// </remarks>
    public Task<ClassificationJobResponseDto> GetClassificationJob(GetClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationJobResponseDto>(),
            GetClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get location details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing location.
    /// </remarks>
    public Task<ClassificationLocationResponseDto> GetClassificationLocation(GetClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationLocationResponseDto>(),
            GetClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of accounting classes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationAccountingClassesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of accounting class objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationAccountingClassResponseDto> ListClassificationAccountingClasses(ListClassificationAccountingClassesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationAccountingClassResponseDto>(),
            ListClassificationAccountingClassesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationChartOfAccountsResponseDto> ListClassificationChartOfAccounts(ListClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationChartOfAccountsResponseDto>(),
            ListClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of departments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationDepartmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of department objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationDepartmentResponseDto> ListClassificationDepartments(ListClassificationDepartmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationDepartmentResponseDto>(),
            ListClassificationDepartmentsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of employees
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationEmployeesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of employee objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationEmployeeResponseDto> ListClassificationEmployees(ListClassificationEmployeesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationEmployeeResponseDto>(),
            ListClassificationEmployeesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of item objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationItemResponseDto> ListClassificationItems(ListClassificationItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationItemResponseDto>(),
            ListClassificationItemsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of job objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationJobResponseDto> ListClassificationJobs(ListClassificationJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationJobResponseDto>(),
            ListClassificationJobsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListResponseDtoClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListClassificationLocationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of location objects. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// <para>
    /// See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.
    /// </para>
    /// </remarks>
    public Task<ListResponseDtoClassificationLocationResponseDto> ListClassificationLocations(ListClassificationLocationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations"),
            [],
            [
                new Param("max", request.Max),
                new Param("sort", request.Sort),
                new Param("filters", request.Filters),
                new Param("page", request.Page),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListResponseDtoClassificationLocationResponseDto>(),
            ListClassificationLocationsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived accounting class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived accounting class. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationAccountingClassResponseDto> RestoreClassificationAccountingClass(RestoreClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationAccountingClassResponseDto>(),
            RestoreClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived chart of accounts. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationChartOfAccountsResponseDto> RestoreClassificationChartOfAccounts(RestoreClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationChartOfAccountsResponseDto>(),
            RestoreClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived department
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived department. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationDepartmentResponseDto> RestoreClassificationDepartment(RestoreClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationDepartmentResponseDto>(),
            RestoreClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived employee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived employee. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationEmployeeResponseDto> RestoreClassificationEmployee(RestoreClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationEmployeeResponseDto>(),
            RestoreClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived item. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationItemResponseDto> RestoreClassificationItem(RestoreClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationItemResponseDto>(),
            RestoreClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived job. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationJobResponseDto> RestoreClassificationJob(RestoreClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationJobResponseDto>(),
            RestoreClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore an archived location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RestoreClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restore an archived location. In the response, the <c>archived</c> field is set as <c>false</c>.
    /// </remarks>
    public Task<ClassificationLocationResponseDto> RestoreClassificationLocation(RestoreClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/{id}/restore"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ClassificationLocationResponseDto>(),
            RestoreClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an accounting class
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationAccountingClassResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationAccountingClassError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing accounting class.
    /// </remarks>
    public Task<ClassificationAccountingClassResponseDto> UpdateClassificationAccountingClass(UpdateClassificationAccountingClassRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/accounting-classes/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationAccountingClassResponseDto>(),
            UpdateClassificationAccountingClassError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a chart of accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationChartOfAccountsResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationChartOfAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing chart of accounts.
    /// </remarks>
    public Task<ClassificationChartOfAccountsResponseDto> UpdateClassificationChartOfAccounts(UpdateClassificationChartOfAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/chart-of-accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationChartOfAccountsResponseDto>(),
            UpdateClassificationChartOfAccountsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a department
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationDepartmentResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationDepartmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing department.
    /// </remarks>
    public Task<ClassificationDepartmentResponseDto> UpdateClassificationDepartment(UpdateClassificationDepartmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/departments/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationDepartmentResponseDto>(),
            UpdateClassificationDepartmentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an employee
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationEmployeeResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationEmployeeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing employee.
    /// </remarks>
    public Task<ClassificationEmployeeResponseDto> UpdateClassificationEmployee(UpdateClassificationEmployeeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/employees/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationEmployeeResponseDto>(),
            UpdateClassificationEmployeeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationItemResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing item.
    /// </remarks>
    public Task<ClassificationItemResponseDto> UpdateClassificationItem(UpdateClassificationItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/items/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationItemResponseDto>(),
            UpdateClassificationItemError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationJobResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing job.
    /// </remarks>
    public Task<ClassificationJobResponseDto> UpdateClassificationJob(UpdateClassificationJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/jobs/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationJobResponseDto>(),
            UpdateClassificationJobError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a location
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClassificationLocationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateClassificationLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about an existing location.
    /// </remarks>
    public Task<ClassificationLocationResponseDto> UpdateClassificationLocation(UpdateClassificationLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/classifications/locations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClassificationLocationResponseDto>(),
            UpdateClassificationLocationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
