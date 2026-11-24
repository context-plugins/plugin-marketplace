using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.DataLookup;

namespace ApiVerve.Api;

public sealed class DataLookup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataLookup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// ASN Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AsnlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AsnlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns information on various ASNs.
    /// </remarks>
    public Task<V1AsnlookupResponse> Asnlookup(AsnlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/asnlookup"),
            [],
            [new Param("asn", request.Asn)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AsnlookupResponse>(),
            AsnlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bible
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BibleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BibleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a bible chapter or verse based on the book, chapter, and or verse
    /// </remarks>
    public Task<V1BibleResponse> Bible(BibleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bible"),
            [],
            [
                new Param("book", request.Book),
                new Param("version", request.Version),
                new Param("chapter", request.Chapter),
                new Param("verse", request.Verse),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BibleResponse>(),
            BibleError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Calling Code
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CallingcodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CallingcodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the country's international dialing codes.
    /// </remarks>
    public Task<V1CallingcodeResponse> Callingcode(CallingcodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/callingcode"),
            [],
            [new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CallingcodeResponse>(),
            CallingcodeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dictionary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DictionaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DictionaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the definition of a word
    /// </remarks>
    public Task<V1DictionaryResponse> Dictionary(DictionaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dictionary"),
            [],
            [new Param("word", request.Word)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DictionaryResponse>(),
            DictionaryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dog Breeds
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DogbreedsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DogbreedsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about a specific dog breed
    /// </remarks>
    public Task<V1DogbreedsResponse> Dogbreeds(DogbreedsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dogbreeds"),
            [],
            [new Param("breed", request.Breed)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DogbreedsResponse>(),
            DogbreedsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Emoji Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EmojiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EmojiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the text representation of an emoji
    /// </remarks>
    public Task<V1EmojiResponse> Emoji(EmojiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/emoji"),
            [],
            [new Param("emoji", request.Emoji)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EmojiResponse>(),
            EmojiError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Gender Detector
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GenderdetectorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GenderdetectorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Detect the likely gender based on a given name
    /// </remarks>
    public Task<V1GenderdetectorResponse> Genderdetector(GenderdetectorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/genderdetector"),
            [],
            [new Param("name", request.Name), new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GenderdetectorResponse>(),
            GenderdetectorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Gravatar Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GravatarlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GravatarlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the Gravatar profile of an email address
    /// </remarks>
    public Task<V1GravatarlookupResponse> Gravatarlookup(GravatarlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/gravatarlookup"),
            [],
            [new Param("email", request.Email)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GravatarlookupResponse>(),
            GravatarlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IP Demographics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IpdemographicsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IpdemographicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get location and demographic data for an IP address
    /// </remarks>
    public Task<V1IpdemographicsResponse> Ipdemographics(IpdemographicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ipdemographics"),
            [],
            [new Param("ip", request.Ip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IpdemographicsResponse>(),
            IpdemographicsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lottery Numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LotteryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LotteryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the game with the numbers parameter. Optionally provide a date for historical results.
    /// </remarks>
    public Task<V1LotteryResponse> Lottery(LotteryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/lottery"),
            [],
            [new Param("numbers", request.Numbers), new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1LotteryResponse>(),
            LotteryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Nobel Prizes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NobelprizesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NobelprizesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various Nobel Prizes.
    /// </remarks>
    public Task<V1NobelprizesResponse> Nobelprizes(NobelprizesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nobelprizes"),
            [],
            [
                new Param("firstname", request.Firstname),
                new Param("lastname", request.Lastname),
                new Param("category", request.Category),
                new Param("year", request.Year),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NobelprizesResponse>(),
            NobelprizesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Open Source Licenses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1OpenlicensesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OpenlicensesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Open Source Licenses is a simple tool for getting information on open source licenses. It returns information on various open source licenses.
    /// </remarks>
    public Task<V1OpenlicensesResponse> Openlicenses(OpenlicensesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/openlicenses"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1OpenlicensesResponse>(),
            OpenlicensesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Thesaurus
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ThesaurusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ThesaurusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of similar words for the specified word
    /// </remarks>
    public Task<V1ThesaurusResponse> Thesaurus(ThesaurusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/thesaurus"),
            [],
            [new Param("word", request.Word)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ThesaurusResponse>(),
            ThesaurusError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Timezone Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TimezonelookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TimezonelookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup timezone data based on the city name
    /// </remarks>
    public Task<V1TimezonelookupResponse> Timezonelookup(TimezonelookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/timezonelookup"),
            [],
            [new Param("city", request.City)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TimezonelookupResponse>(),
            TimezonelookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unicode Character Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UnicodelookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnicodelookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get detailed information about a Unicode character
    /// </remarks>
    public Task<V1UnicodelookupResponse> Unicodelookup(UnicodelookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/unicodelookup"),
            [],
            [new Param("character", request.Character), new Param("codepoint", request.Codepoint)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UnicodelookupResponse>(),
            UnicodelookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// World Time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WorldtimeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WorldtimeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current time in any city
    /// </remarks>
    public Task<V1WorldtimeResponse> Worldtime(WorldtimeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/worldtime"),
            [],
            [new Param("city", request.City)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WorldtimeResponse>(),
            WorldtimeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// ZIP Demographics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ZipdemographicsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ZipdemographicsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get demographic data for a ZIP code
    /// </remarks>
    public Task<V1ZipdemographicsResponse> Zipdemographics(ZipdemographicsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/zipdemographics"),
            [],
            [new Param("zip", request.Zip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ZipdemographicsResponse>(),
            ZipdemographicsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
